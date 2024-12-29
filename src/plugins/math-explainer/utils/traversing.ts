export function getNodeText(node: any): string {
  if (!node) return "";
  if (!node.children) return node.value;
  return node.children.map((child: any) => getNodeText(child)).join("");
}

/*
export function getNextTexts(node: any, fromIndex: number): string[] {
  return node.children
    .slice(fromIndex + 1)
    .map((child: any) => getNodeText(child));
}
*/

export function getNextNText(node: any, fromIndex: number, n: number): string {
  return node.children
    .slice(fromIndex + 1, fromIndex + 1 + n)
    .map((child: any) => getNodeText(child))
    .join("");
}

/*
export function getPreviousTexts(node: any, fromIndex: number): string[] {
  return node.children
    .slice(0, fromIndex)
    .map((child: any) => getNodeText(child));
}
*/

export function getPreviousNText(
  node: any,
  fromIndex: number,
  n: number
): string {
  return node.children
    .slice(fromIndex - n, fromIndex)
    .map((child: any) => getNodeText(child))
    .join("");
}

/*
export function isWithinAParenthesis(node: any, index: number): boolean {
  const previous = getPreviousTexts(node, index);
  return (
    previous.filter((text) => text === "(").length >
    previous.filter((text) => text === ")").length
  );
}
*/
