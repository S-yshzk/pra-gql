import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_textWhereInput } from "../../../inputs/Film_textWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFilm_textArgs {
  @TypeGraphQL.Field(_type => Film_textWhereInput, {
    nullable: true
  })
  where?: Film_textWhereInput | undefined;
}
