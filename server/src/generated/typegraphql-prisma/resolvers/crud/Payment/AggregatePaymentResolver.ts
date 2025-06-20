import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePaymentArgs } from "./args/AggregatePaymentArgs";
import { Payment } from "../../../models/Payment";
import { AggregatePayment } from "../../outputs/AggregatePayment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Payment)
export class AggregatePaymentResolver {
  @TypeGraphQL.Query(_returns => AggregatePayment, {
    nullable: false
  })
  async aggregatePayment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePaymentArgs): Promise<AggregatePayment> {
    return getPrismaFromContext(ctx).payment.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
