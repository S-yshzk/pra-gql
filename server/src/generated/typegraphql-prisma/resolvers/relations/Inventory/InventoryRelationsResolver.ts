import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Film } from "../../../models/Film";
import { Inventory } from "../../../models/Inventory";
import { Rental } from "../../../models/Rental";
import { Store } from "../../../models/Store";
import { InventoryRentalArgs } from "./args/InventoryRentalArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Inventory)
export class InventoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Film, {
    nullable: false
  })
  async film(@TypeGraphQL.Root() inventory: Inventory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Film> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inventory.findUniqueOrThrow({
      where: {
        inventory_id: inventory.inventory_id,
      },
    }).film({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Store, {
    nullable: false
  })
  async store(@TypeGraphQL.Root() inventory: Inventory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Store> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inventory.findUniqueOrThrow({
      where: {
        inventory_id: inventory.inventory_id,
      },
    }).store({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Rental], {
    nullable: false
  })
  async rental(@TypeGraphQL.Root() inventory: Inventory, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: InventoryRentalArgs): Promise<Rental[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).inventory.findUniqueOrThrow({
      where: {
        inventory_id: inventory.inventory_id,
      },
    }).rental({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
