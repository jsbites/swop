I will add more, but just as a quick usage example.

Assume you have actions `ADD_TO_DO`, `REMOVE_TO_DO`, and reducers `addToDo` and `removeToDo`.

Then…

```javascript
import swop from 'swop';

// constants and reducers are defined here.

// Export a higher-order reducer that switches to the reducer that the action maps to 
// or defaults to an identity reducer if there’s not matching action.
export default swop({
  [ADD_TO_DO]: addToDo,
  [REMOVE_TO_DO]: removeToDo
});
```
