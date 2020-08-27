import{Injectable, Inject} from '@angular/core';
import{Scrum} from './scrum';
import{SCRUMS} from './mock-scrums';

@Injectable()
export class ScrumService{
    getScrums():Promise<Scrum[]>{
        return Promise.resolve(SCRUMS);
    }
    getScrumsSlowly():Promise<Scrum[]>{
        return new Promise(resolve=>{
            //simulando la latencia de un server con 2seg de delay
            setTimeout(()=>resolve(this.getScrums()),2000);
        });
    }
}