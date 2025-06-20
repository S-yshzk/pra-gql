import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_categoryUpdateManyMutationInput } from "../../../inputs/Film_categoryUpdateManyMutationInput";
import { Film_categoryWhereInput } from "../../../inputs/Film_categoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFilm_categoryArgs {
  @TypeGraphQL.Field(_type => Film_categoryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Film_categoryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Film_categoryWhereInput, {
    nullable: true
  })
  where?: Film_categoryWhereInput | undefined;
}
