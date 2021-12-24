// @ts-ignore
import { find } from "styled-components/test-utils";
import { StyledComponent } from "styled-components";

export function findStyledComponent(
  container: HTMLDivElement,
  element: StyledComponent<React.ComponentType<any>, object>
): boolean {
  console.log(!!container, !!element);

  const componentIsFound = !!find(container, element);
  return componentIsFound;
}
