import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable} from "rxjs";
import { timeout } from "rxjs/operators";

//maneja el tiempo de espera de la respuesta
export class TimeOutInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(timeout(120000));
    }
        
}