import visitMSubSup from "./elements/msubsup";
import visitMUnder from "./elements/munder";
import visitMUnderOver from "./elements/munderover";
import visitMSub from "./elements/msub";
import visitMSup from "./elements/msup";
import visitMI from "./elements/mi";
import visitMO from "./elements/mo";
import visitMN from "./elements/mn";

export default function customCode() {
  return (tree: any) => {
    visitMSubSup(tree);
    visitMSub(tree);
    visitMSup(tree);
    visitMUnderOver(tree);
    visitMUnder(tree);
    visitMI(tree);
    visitMO(tree);
    visitMN(tree);
  };
}
