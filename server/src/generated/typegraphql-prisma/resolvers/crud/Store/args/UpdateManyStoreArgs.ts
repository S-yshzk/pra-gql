import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoreUpdateManyMutationInput } from "../../../inputs/StoreUpdateManyMutationInput";
import { StoreWhereInput } from "../../../inputs/StoreWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyStoreArgs {
  @TypeGraphQL.Field(_type => StoreUpdateManyMutationInput, {
    nullable: false
  })
  data!: StoreUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => StoreWhereInput, {
    nullable: true
  })
  where?: StoreWhereInput | undefined;
}
