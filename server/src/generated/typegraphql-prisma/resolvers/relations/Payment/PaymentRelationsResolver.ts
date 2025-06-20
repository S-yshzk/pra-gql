import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Customer } from "../../../models/Customer";
import { Payment } from "../../../models/Payment";
import { Rental } from "../../../models/Rental";
import { Staff } from "../../../models/Staff";
import { PaymentRentalArgs } from "./args/PaymentRentalArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Payment)
export class PaymentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: false
  })
  async customer(@TypeGraphQL.Root() payment: Payment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Customer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).payment.findUniqueOrThrow({
      where: {
        payment_id: payment.payment_id,
      },
    }).customer({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Rental, {
    nullable: true
  })
  async rental(@TypeGraphQL.Root() payment: Payment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PaymentRentalArgs): Promise<Rental | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).payment.findUniqueOrThrow({
      where: {
        payment_id: payment.payment_id,
      },
    }).rental({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Staff, {
    nullable: false
  })
  async staff(@TypeGraphQL.Root() payment: Payment, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Staff> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).payment.findUniqueOrThrow({
      where: {
        payment_id: payment.payment_id,
      },
    }).staff({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
