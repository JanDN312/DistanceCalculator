export class Distcalcmethods{
    getMinkowskiDistance(point1: Array<number>, point2: Array<number>,p: number){
        var result:number=0
        for (let i = 0; i < point1.length; i++){
            result=result+(((point1[i]-point2[i])**2)**0.5)**p
        }
        return result**(1/p)
    }
    getManhattanDistance(point1: Array<number>, point2: Array<number>){
        return this.getMinkowskiDistance(point1,point2,1)
    }
    getEuclideanDistance(point1: Array<number>, point2: Array<number>){
        return this.getMinkowskiDistance(point1,point2,2)
    }
}