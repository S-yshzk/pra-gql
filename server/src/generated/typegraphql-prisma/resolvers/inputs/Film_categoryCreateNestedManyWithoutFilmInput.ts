import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Film_categoryCreateManyFilmInputEnvelope } from "../inputs/Film_categoryCreateManyFilmInputEnvelope";
import { Film_categoryCreateOrConnectWithoutFilmInput } from "../inputs/Film_categoryCreateOrConnectWithoutFilmInput";
import { Film_categoryCreateWithoutFilmInput } from "../inputs/Film_categoryCreateWithoutFilmInput";
import { Film_categoryWhereUniqueInput } from "../inputs/Film_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Film_categoryCreateNestedManyWithoutFilmInput", {})
export class Film_categoryCreateNestedManyWithoutFilmInput {
  @TypeGraphQL.Field(_type => [Film_categoryCreateWithoutFilmInput], {
    nullable: true
  })
  create?: Film_categoryCreateWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryCreateOrConnectWithoutFilmInput], {
    nullable: true
  })
  connectOrCreate?: Film_categoryCreateOrConnectWithoutFilmInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_categoryCreateManyFilmInputEnvelope, {
    nullable: true
  })
  createMany?: Film_categoryCreateManyFilmInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Film_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Film_categoryWhereUniqueInput[] | undefined;
}
