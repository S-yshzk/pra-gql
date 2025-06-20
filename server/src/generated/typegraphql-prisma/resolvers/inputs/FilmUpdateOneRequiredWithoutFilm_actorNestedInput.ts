import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FilmCreateOrConnectWithoutFilm_actorInput } from "../inputs/FilmCreateOrConnectWithoutFilm_actorInput";
import { FilmCreateWithoutFilm_actorInput } from "../inputs/FilmCreateWithoutFilm_actorInput";
import { FilmUpdateToOneWithWhereWithoutFilm_actorInput } from "../inputs/FilmUpdateToOneWithWhereWithoutFilm_actorInput";
import { FilmUpsertWithoutFilm_actorInput } from "../inputs/FilmUpsertWithoutFilm_actorInput";
import { FilmWhereUniqueInput } from "../inputs/FilmWhereUniqueInput";

@TypeGraphQL.InputType("FilmUpdateOneRequiredWithoutFilm_actorNestedInput", {})
export class FilmUpdateOneRequiredWithoutFilm_actorNestedInput {
  @TypeGraphQL.Field(_type => FilmCreateWithoutFilm_actorInput, {
    nullable: true
  })
  create?: FilmCreateWithoutFilm_actorInput | undefined;

  @TypeGraphQL.Field(_type => FilmCreateOrConnectWithoutFilm_actorInput, {
    nullable: true
  })
  connectOrCreate?: FilmCreateOrConnectWithoutFilm_actorInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpsertWithoutFilm_actorInput, {
    nullable: true
  })
  upsert?: FilmUpsertWithoutFilm_actorInput | undefined;

  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: true
  })
  connect?: FilmWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FilmUpdateToOneWithWhereWithoutFilm_actorInput, {
    nullable: true
  })
  update?: FilmUpdateToOneWithWhereWithoutFilm_actorInput | undefined;
}
