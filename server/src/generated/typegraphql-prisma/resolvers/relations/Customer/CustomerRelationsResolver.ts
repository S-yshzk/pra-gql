import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Customer } from "../../../models/Customer";
import { Payment } from "../../../models/Payment";
import { Rental } from "../../../models/Rental";
import { Store } from "../../../models/Store";
import { CustomerPaymentArgs } from "./args/CustomerPaymentArgs";
import { CustomerRentalArgs } from "./args/CustomerRentalArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customer)
export class CustomerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Address, {
    nullable: false
  })
  async address(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Address> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.findUniqueOrThrow({
      where: {
        customer_id: customer.customer_id,
      },
    }).address({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Store, {
    nullable: false
  })
  async store(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Store> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.findUniqueOrThrow({
      where: {
        customer_id: customer.customer_id,
      },
    }).store({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Payment], {
    nullable: false
  })
  async payment(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CustomerPaymentArgs): Promise<Payment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.findUniqueOrThrow({
      where: {
        customer_id: customer.customer_id,
      },
    }).payment({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Rental], {
    nullable: false
  })
  async rental(@TypeGraphQL.Root() customer: Customer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CustomerRentalArgs): Promise<Rental[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.findUniqueOrThrow({
      where: {
        customer_id: customer.customer_id,
      },
    }).rental({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
