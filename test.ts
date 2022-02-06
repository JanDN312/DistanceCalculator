import {Distcalcmethods} from "https://deno.land/x/distance_calculator/mod.ts"

var testdata:Array<number[]>=[[1,2,3],[3,6,2]]
const dist=new Distcalcmethods()
console.log(dist.getMinkowskiDistance(testdata[0],testdata[1],5))
console.log(dist.getManhattanDistance(testdata[0],testdata[1]))
console.log(dist.getEuclideanDistance(testdata[0],testdata[1]))