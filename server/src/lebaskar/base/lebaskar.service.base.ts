/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Lebaskar } from "@prisma/client";

export class LebaskarServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LebaskarFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LebaskarFindManyArgs>
  ): Promise<number> {
    return this.prisma.lebaskar.count(args);
  }

  async findMany<T extends Prisma.LebaskarFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LebaskarFindManyArgs>
  ): Promise<Lebaskar[]> {
    return this.prisma.lebaskar.findMany(args);
  }
  async findOne<T extends Prisma.LebaskarFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LebaskarFindUniqueArgs>
  ): Promise<Lebaskar | null> {
    return this.prisma.lebaskar.findUnique(args);
  }
  async create<T extends Prisma.LebaskarCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LebaskarCreateArgs>
  ): Promise<Lebaskar> {
    return this.prisma.lebaskar.create<T>(args);
  }
  async update<T extends Prisma.LebaskarUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LebaskarUpdateArgs>
  ): Promise<Lebaskar> {
    return this.prisma.lebaskar.update<T>(args);
  }
  async delete<T extends Prisma.LebaskarDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LebaskarDeleteArgs>
  ): Promise<Lebaskar> {
    return this.prisma.lebaskar.delete(args);
  }
}
