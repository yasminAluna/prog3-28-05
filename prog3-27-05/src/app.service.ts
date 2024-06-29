import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = []; // Exemplo de armazenamento em memória. Substitua pelo seu repositório.

  create(createItemDto: CreateItemDto): Item {
    const newItem = {
      id: this.items.length + 1,
      ...createItemDto,
    };
    this.items.push(newItem);
    return newItem;
  }

  findAll(): Item[] {
    return this.items;
  }
}
