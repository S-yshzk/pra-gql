import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmOrderByWithRelationInput } from "../../../inputs/FilmOrderByWithRelationInput";
import { FilmWhereInput } from "../../../inputs/FilmWhereInput";
import { FilmWhereUniqueInput } from "../../../inputs/FilmWhereUniqueInput";
import { FilmScalarFieldEnum } from "../../../../enums/FilmScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageFilm_film_language_idTolanguageArgs {
  @TypeGraphQL.Field(_type => FilmWhereInput, {
    nullable: true
  })
  where?: FilmWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FilmOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FilmOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FilmWhereUniqueInput, {
    nullable: true
  })
  cursor?: FilmWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FilmScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"film_id" | "title" | "description" | "release_year" | "language_id" | "original_language_id" | "rental_duration" | "rental_rate" | "length" | "replacement_cost" | "rating" | "special_features" | "last_update"> | undefined;
}
