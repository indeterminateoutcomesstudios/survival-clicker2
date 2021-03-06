import { Action } from '@/classes/game/base/actions';
import { State } from '@/classes/game/state';
import { traverse } from '@/utils/node';

export function applyQueued(state: State) {
  const multiplier = state.timeMultiplier;

  for (const node of traverse(state)) {
    if (node instanceof Action) {
      const queued = node.favorite && node.favorite.queued;
      if (queued && queued.shouldCalculate({ multiplier })) {
        if (node.validate({ multiplier })) {
          node.calculate({ multiplier });
        }
      }
    }
  }
}
