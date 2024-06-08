export class CreateCategoryDto {
    readonly name: string;
    readonly description: string;
    readonly createdAt: Date;
    readonly parentCategory: string;
    readonly slug: string;
    readonly image: string;
  }
  