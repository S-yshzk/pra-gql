import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorOrderByWithAggregationInput } from "../../../inputs/Film_actorOrderByWithAggregationInput";
import { Film_actorScalarWhereWithAggregatesInput } from "../../../inputs/Film_actorScalarWhereWithAggregatesInput";
import { Film_actorWhereInput } from "../../../inputs/Film_actorWhereInput";
import { Film_actorScalarFieldEnum } from "../../../../enums/Film_actorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFilm_actorArgs {
  @TypeGraphQL.Field(_type => Film_actorWhereInput, {
    nullable: true
  })
  where?: Film_actorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Film_actorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Film_actorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Film_actorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"actor_id" | "film_id" | "last_update">;

  @TypeGraphQL.Field(_type => Film_actorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Film_actorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
