import { ChildImageSharp } from '@/models/graphql.model';

/** extract from graphql query the image fluid data */
export function getImageFluid(edge: any): ChildImageSharp {
  return edge.node.childImageSharp;
}
