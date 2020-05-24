import React from 'react';

//

import { composeDecorator, composeReducer } from '../utils';

import useTableOptions from './useTableOptions';
import useTableState from './useTableState';
import useColumns from './useColumns';
import useHeadersAndFooters from './useHeadersAndFooters';
import useDataModel from './useDataModel';

import { withCore } from '../plugins/withCore';

import { UserTableOptions, Instance, InstancePlugs, Plugin } from '../types';

type PlugCreatorType = 'reducer' | 'decorator';
//
type PlugType = [keyof InstancePlugs, PlugCreatorType];

const plugTypes: Array<PlugType> = [
  ['useReduceOptions', 'reducer'],
  ['useInstanceAfterState', 'decorator'],
  ['useReduceColumns', 'reducer'],
  ['useReduceAllColumns', 'reducer'],
  ['useReduceLeafColumns', 'reducer'],
  ['decorateColumn', 'decorator'],
  ['useReduceHeaderGroups', 'reducer'],
  ['useReduceFooterGroups', 'reducer'],
  ['useReduceFlatHeaders', 'reducer'],
  ['decorateHeader', 'decorator'],
  ['decorateRow', 'decorator'],
  ['decorateCell', 'decorator'],
  ['useInstanceAfterDataModel', 'decorator'],
  ['reduceTableProps', 'reducer'],
  ['reduceTableBodyProps', 'reducer'],
  ['reduceTableHeadProps', 'reducer'],
  ['reduceTableFootProps', 'reducer'],
  ['reduceHeaderGroupProps', 'reducer'],
  ['reduceFooterGroupProps', 'reducer'],
  ['reduceHeaderProps', 'reducer'],
  ['reduceRowProps', 'reducer'],
  ['reduceCellProps', 'reducer'],
];

export const useTable = (options: UserTableOptions = {}) => {
  const instanceRef = React.useRef({} as Instance);

  const instance = instanceRef.current;

  const { plugins = [] } = options;

  const userPlugins = plugins.filter(Boolean);

  userPlugins.sort((a, b) => {
    if (a.after.includes(b.name) || a.after.length > b.after.length) {
      return 1;
    }
    if (b.after.includes(a.name) || b.after.length > a.after.length) {
      return -1;
    }
    return 0;
  });

  const allPlugins: Array<Plugin> = [withCore, ...userPlugins];

  instance.plugs = {} as InstancePlugs;

  if (process.env.NODE_ENV !== 'production') {
    allPlugins.forEach(plugin => {
      Object.keys(plugin.plugs).forEach(plugName => {
        if (!plugTypes.find(d => d[0] === plugName)) {
          throw new Error(
            `Unknown plug "${plugName}" found in plugin "${plugin.name}"`
          );
        }
      });
    });
  }

  plugTypes.forEach(([plugType, plugCreatorType]) => {
    const pluginPlugs = allPlugins
      // Get the info necessary to sort
      .map(plugin => {
        const plug = plugin.plugs[plugType];

        if ('plug' in plug) {
          return {
            name: plugin.name,
            plug: plug.plug,
            after: plug.after,
          };
        }

        return {
          name: plugin.name,
          plug: plug,
          after: [],
        };
      })
      // remove empty
      .filter(d => d.plug)
      // sort for optional after deps
      .sort((a, b) => {
        if (a.after.includes(b.name) || a.after.length > b.after.length) {
          return 1;
        }
        if (b.after.includes(a.name) || b.after.length > a.after.length) {
          return -1;
        }
        return 0;
      })
      // map back to the plug functions
      .map(d => d.plug);

    const plugFn =
      plugCreatorType === 'reducer'
        ? composeReducer(pluginPlugs)
        : composeDecorator(pluginPlugs);

    instance.plugs[plugType] = React.useCallback(plugFn, pluginPlugs);
  });

  // Apply the defaults to our options
  instance.options = useTableOptions(options, instance);

  useTableState(instance);

  // instance.plugs.useInstanceAfterState(instance);

  useColumns(instance);
  useHeadersAndFooters(instance);
  useDataModel(instance);

  // instance.plugs.useInstanceAfterDataModel(instance);

  return instance;
};
