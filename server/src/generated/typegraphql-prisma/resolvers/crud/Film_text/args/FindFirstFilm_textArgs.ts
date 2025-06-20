import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textOrderByWithRelationInput } from "../../../inputs/Film_textOrderByWithRelationInput";
import { Film_textWhereInput } from "../../../inputs/Film_textWhereInput";
import { Film_textWhereUniqueInput } from "../../../inputs/Film_textWhereUniqueInput";
import { Film_textScalarFieldEnum } from "../../../../enums/Film_textScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFilm_textArgs {
  @TypeGraphQL.Field(_type => Film_textWhereInput, {
    nullable: true
  })
  where?: Film_textWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Film_textOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Film_textOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_textWhereUniqueInput, {
    nullable: true
  })
  cursor?: Film_textWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Film_textScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"film_id" | "title" | "description"> | undefined;
}
