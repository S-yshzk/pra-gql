import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { City } from "../../../models/City";
import { Country } from "../../../models/Country";
import { CountryCityArgs } from "./args/CountryCityArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Country)
export class CountryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [City], {
    nullable: false
  })
  async city(@TypeGraphQL.Root() country: Country, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CountryCityArgs): Promise<City[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).country.findUniqueOrThrow({
      where: {
        country_id: country.country_id,
      },
    }).city({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
