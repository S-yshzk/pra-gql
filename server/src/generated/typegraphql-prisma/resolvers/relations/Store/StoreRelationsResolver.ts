import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Customer } from "../../../models/Customer";
import { Inventory } from "../../../models/Inventory";
import { Staff } from "../../../models/Staff";
import { Store } from "../../../models/Store";
import { StoreCustomerArgs } from "./args/StoreCustomerArgs";
import { StoreInventoryArgs } from "./args/StoreInventoryArgs";
import { StoreStaff_staff_store_idTostoreArgs } from "./args/StoreStaff_staff_store_idTostoreArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Store)
export class StoreRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Customer], {
    nullable: false
  })
  async customer(@TypeGraphQL.Root() store: Store, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StoreCustomerArgs): Promise<Customer[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).store.findUniqueOrThrow({
      where: {
        store_id: store.store_id,
      },
    }).customer({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Inventory], {
    nullable: false
  })
  async inventory(@TypeGraphQL.Root() store: Store, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StoreInventoryArgs): Promise<Inventory[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).store.findUniqueOrThrow({
      where: {
        store_id: store.store_id,
      },
    }).inventory({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Staff], {
    nullable: false
  })
  async staff_staff_store_idTostore(@TypeGraphQL.Root() store: Store, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StoreStaff_staff_store_idTostoreArgs): Promise<Staff[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).store.findUniqueOrThrow({
      where: {
        store_id: store.store_id,
      },
    }).staff_staff_store_idTostore({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Address, {
    nullable: false
  })
  async address(@TypeGraphQL.Root() store: Store, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Address> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).store.findUniqueOrThrow({
      where: {
        store_id: store.store_id,
      },
    }).address({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Staff, {
    nullable: false
  })
  async staff_store_manager_staff_idTostaff(@TypeGraphQL.Root() store: Store, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Staff> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).store.findUniqueOrThrow({
      where: {
        store_id: store.store_id,
      },
    }).staff_store_manager_staff_idTostaff({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
