import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { City } from "../../../models/City";
import { Country } from "../../../models/Country";
import { CityAddressArgs } from "./args/CityAddressArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => City)
export class CityRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Address], {
    nullable: false
  })
  async address(@TypeGraphQL.Root() city: City, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CityAddressArgs): Promise<Address[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).city.findUniqueOrThrow({
      where: {
        city_id: city.city_id,
      },
    }).address({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Country, {
    nullable: false
  })
  async country(@TypeGraphQL.Root() city: City, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Country> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).city.findUniqueOrThrow({
      where: {
        city_id: city.city_id,
      },
    }).country({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
