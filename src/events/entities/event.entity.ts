import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

class EventPayload {
  coffeeId: string;
}

@Schema()
export class Event extends mongoose.Document {
  @Prop()
  type: string;

  @Prop({ index: true })
  name: string;

  @Prop()
  payload: EventPayload;
}

export const EventSchema = SchemaFactory.createForClass(Event);
// Create an index ordering items with ascending order by name and descending order by type
// EventSchema.index({ name: 1, type: -1 }) 