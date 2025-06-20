import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Customer } from "../../../models/Customer";
import { Inventory } from "../../../models/Inventory";
import { Payment } from "../../../models/Payment";
import { Rental } from "../../../models/Rental";
import { Staff } from "../../../models/Staff";
import { RentalPaymentArgs } from "./args/RentalPaymentArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Rental)
export class RentalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Payment], {
    nullable: false
  })
  async payment(@TypeGraphQL.Root() rental: Rental, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: RentalPaymentArgs): Promise<Payment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rental.findUniqueOrThrow({
      where: {
        rental_id: rental.rental_id,
      },
    }).payment({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Customer, {
    nullable: false
  })
  async customer(@TypeGraphQL.Root() rental: Rental, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Customer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rental.findUniqueOrThrow({
      where: {
        rental_id: rental.rental_id,
      },
    }).customer({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Inventory, {
    nullable: false
  })
  async inventory(@TypeGraphQL.Root() rental: Rental, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Inventory> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rental.findUniqueOrThrow({
      where: {
        rental_id: rental.rental_id,
      },
    }).inventory({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Staff, {
    nullable: false
  })
  async staff(@TypeGraphQL.Root() rental: Rental, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Staff> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).rental.findUniqueOrThrow({
      where: {
        rental_id: rental.rental_id,
      },
    }).staff({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
