import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { City } from "../../../models/City";
import { Customer } from "../../../models/Customer";
import { Staff } from "../../../models/Staff";
import { Store } from "../../../models/Store";
import { AddressCustomerArgs } from "./args/AddressCustomerArgs";
import { AddressStaffArgs } from "./args/AddressStaffArgs";
import { AddressStoreArgs } from "./args/AddressStoreArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Address)
export class AddressRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => City, {
    nullable: false
  })
  async city(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<City> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).address.findUniqueOrThrow({
      where: {
        address_id: address.address_id,
      },
    }).city({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Customer], {
    nullable: false
  })
  async customer(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AddressCustomerArgs): Promise<Customer[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).address.findUniqueOrThrow({
      where: {
        address_id: address.address_id,
      },
    }).customer({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Staff], {
    nullable: false
  })
  async staff(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AddressStaffArgs): Promise<Staff[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).address.findUniqueOrThrow({
      where: {
        address_id: address.address_id,
      },
    }).staff({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Store], {
    nullable: false
  })
  async store(@TypeGraphQL.Root() address: Address, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AddressStoreArgs): Promise<Store[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).address.findUniqueOrThrow({
      where: {
        address_id: address.address_id,
      },
    }).store({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
