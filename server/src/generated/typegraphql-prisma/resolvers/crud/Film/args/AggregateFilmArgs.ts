import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FilmOrderByWithRelationInput } from "../../../inputs/FilmOrderByWithRelationInput";
import { FilmWhereInput } from "../../../inputs/FilmWhereInput";
import { FilmWhereUniqueInput } from "../../../inputs/FilmWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFilmArgs {
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
}
