import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityCreateManyCountryInput } from "../inputs/CityCreateManyCountryInput";

@TypeGraphQL.InputType("CityCreateManyCountryInputEnvelope", {})
export class CityCreateManyCountryInputEnvelope {
  @TypeGraphQL.Field(_type => [CityCreateManyCountryInput], {
    nullable: false
  })
  data!: CityCreateManyCountryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
