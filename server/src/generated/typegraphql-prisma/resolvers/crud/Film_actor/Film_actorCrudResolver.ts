import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFilm_actorArgs } from "./args/AggregateFilm_actorArgs";
import { CreateManyFilm_actorArgs } from "./args/CreateManyFilm_actorArgs";
import { CreateOneFilm_actorArgs } from "./args/CreateOneFilm_actorArgs";
import { DeleteManyFilm_actorArgs } from "./args/DeleteManyFilm_actorArgs";
import { DeleteOneFilm_actorArgs } from "./args/DeleteOneFilm_actorArgs";
import { FindFirstFilm_actorArgs } from "./args/FindFirstFilm_actorArgs";
import { FindFirstFilm_actorOrThrowArgs } from "./args/FindFirstFilm_actorOrThrowArgs";
import { FindManyFilm_actorArgs } from "./args/FindManyFilm_actorArgs";
import { FindUniqueFilm_actorArgs } from "./args/FindUniqueFilm_actorArgs";
import { FindUniqueFilm_actorOrThrowArgs } from "./args/FindUniqueFilm_actorOrThrowArgs";
import { GroupByFilm_actorArgs } from "./args/GroupByFilm_actorArgs";
import { UpdateManyFilm_actorArgs } from "./args/UpdateManyFilm_actorArgs";
import { UpdateOneFilm_actorArgs } from "./args/UpdateOneFilm_actorArgs";
import { UpsertOneFilm_actorArgs } from "./args/UpsertOneFilm_actorArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Film_actor } from "../../../models/Film_actor";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFilm_actor } from "../../outputs/AggregateFilm_actor";
import { Film_actorGroupBy } from "../../outputs/Film_actorGroupBy";

@TypeGraphQL.Resolver(_of => Film_actor)
export class Film_actorCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateFilm_actor, {
    nullable: false
  })
  async aggregateFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFilm_actorArgs): Promise<AggregateFilm_actor> {
    return getPrismaFromContext(ctx).film_actor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyFilm_actorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Film_actor, {
    nullable: false
  })
  async createOneFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneFilm_actorArgs): Promise<Film_actor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyFilm_actorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Film_actor, {
    nullable: true
  })
  async deleteOneFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneFilm_actorArgs): Promise<Film_actor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Film_actor, {
    nullable: true
  })
  async findFirstFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFilm_actorArgs): Promise<Film_actor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Film_actor, {
    nullable: true
  })
  async findFirstFilm_actorOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFilm_actorOrThrowArgs): Promise<Film_actor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Film_actor], {
    nullable: false
  })
  async film_actors(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyFilm_actorArgs): Promise<Film_actor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Film_actor, {
    nullable: true
  })
  async film_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFilm_actorArgs): Promise<Film_actor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Film_actor, {
    nullable: true
  })
  async getFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueFilm_actorOrThrowArgs): Promise<Film_actor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Film_actorGroupBy], {
    nullable: false
  })
  async groupByFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFilm_actorArgs): Promise<Film_actorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyFilm_actorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Film_actor, {
    nullable: true
  })
  async updateOneFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneFilm_actorArgs): Promise<Film_actor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Film_actor, {
    nullable: false
  })
  async upsertOneFilm_actor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneFilm_actorArgs): Promise<Film_actor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).film_actor.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
