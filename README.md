# Distance Calculator (Minkowski/Manhattan/Euclidean)
This Module allows you to compute the Distance between two n-dimensional points with your preferred method.

# Usage via Commandline
```js
deno run --allow-net https://deno.land/x/distance_calculator@2.0.0/test.ts  //or newer version
```
# Usage Example
```js
import {Distcalcmethods} from "https://deno.land/x/distance_calculator@2.0.0/mod.ts" //or newer version

var testdata:Array<number[]>=[[1,2,3],[3,6,2]]
const dist=new Distcalcmethods()
console.log(dist.getMinkowskiDistance(testdata[0],testdata[1],5))
console.log(dist.getManhattanDistance(testdata[0],testdata[1]))
console.log(dist.getEuclideanDistance(testdata[0],testdata[1]))
```
# Output
```
4.025455198109523
7
4.58257569495584
```
