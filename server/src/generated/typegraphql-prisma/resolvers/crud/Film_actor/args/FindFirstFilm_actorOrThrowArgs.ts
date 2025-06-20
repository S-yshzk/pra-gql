import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Film_actorOrderByWithRelationInput } from "../../../inputs/Film_actorOrderByWithRelationInput";
import { Film_actorWhereInput } from "../../../inputs/Film_actorWhereInput";
import { Film_actorWhereUniqueInput } from "../../../inputs/Film_actorWhereUniqueInput";
import { Film_actorScalarFieldEnum } from "../../../../enums/Film_actorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFilm_actorOrThrowArgs {
  @TypeGraphQL.Field(_type => Film_actorWhereInput, {
    nullable: true
  })
  where?: Film_actorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Film_actorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: Film_actorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => Film_actorWhereUniqueInput, {
    nullable: true
  })
  cursor?: Film_actorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Film_actorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"actor_id" | "film_id" | "last_update"> | undefined;
}
