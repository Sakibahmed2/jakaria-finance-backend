import { Query } from "mongoose";

class QueryBuilder<T> {
  public moduleQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(moduleQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.moduleQuery = moduleQuery;
    this.query = query;
  }

  search(searchableFields: string[]) {
    const searchTerm = this.query.searchTerm;
    if (searchTerm) {
      const regexQuery = {
        $or: searchableFields.map((field) => ({
          [field]: {
            $regex: searchTerm,
            $options: "i", // Case-insensitive search
          },
        })),
      };
      this.moduleQuery = this.moduleQuery.find(regexQuery);
    }
    return this;
  }

  filter() {
    const queryObj = { ...this.query };
    const excludedFields = ["searchTerm", "sort", "page", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    this.moduleQuery = this.moduleQuery.find(queryObj);

    return this;
  }

  sort() {
    const sortBy = this.query.sort
      ? (this?.query?.sort as string)?.split(",").join(" ")
      : "-createdAt";
    this.moduleQuery = this.moduleQuery.sort(sortBy as string);

    return this;
  }

  paginate() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const skip = (page - 1) * limit;

    this.moduleQuery = this.moduleQuery.skip(skip).limit(limit);
    return this;
  }

  async countTotal() {
    const totalQuery = this.moduleQuery.getFilter();
    const totalCount = await this.moduleQuery.model.countDocuments(totalQuery);
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const totalPages = Math.ceil(totalCount / limit);
    return {
      totalCount,
      totalPages,
      currentPage: page,
      limit,
    };
  }

  //   static async getNextPrev(){

  //   }
}

export default QueryBuilder;
