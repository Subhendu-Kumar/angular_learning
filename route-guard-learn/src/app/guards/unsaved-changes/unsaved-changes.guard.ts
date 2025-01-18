import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

interface canComponentDeactive {
  canDeactive: () => boolean | Observable<boolean>;
}

export const unsavedChangesGuard: CanDeactivateFn<canComponentDeactive> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactive ? component.canDeactive() : true;
};
