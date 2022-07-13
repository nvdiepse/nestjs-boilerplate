import { BaseEntity, Repository } from 'typeorm';
import { IBaseService } from './i.base.service';
import { EntityId } from 'typeorm/repository/EntityId';

export class BaseService<T extends BaseEntity, R extends Repository<T>>
  implements IBaseService<T>
{
  protected readonly repository: R;

  constructor(repository: R) {
    this.repository = repository;
  }

  index(): Promise<T[]> {
    return this.repository.find();
  }

  // findById(id: EntityId): Promise<T> {
  //   return this.repository.findOne({
  //     id: id,
  //   });
  // }

  findByIds(ids: [EntityId]): Promise<T[]> {
    return this.repository.findByIds(ids);
  }

  store(data: any): Promise<T> {
    return this.repository.save(data);
  }

  // update(id: EntityId, data: any): Promise<T> {
  //   return this.repository.update(id, data);
  // }

  async update(id: EntityId, data: any): Promise<any> {
    await this.repository.update(id, data);
    return true;
    // return this.findById(id);
  }

  // delete(id: EntityId): Promise<DeleteResult> {
  //   return this.repository.delete(id);`
  // }
}
