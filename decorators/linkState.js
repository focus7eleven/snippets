/**
 * 
 * @param {object} component 
 * @param {string} key 
 * @param {string} eventPath 
 */
export default function linkState(component, key, eventPath) {
  const path = key.split('.')
  const cache = component._lsc || (component._lsc = {})
  
  return cache[ key + eventPath ] || (cache[ key + eventPath ] = (e) => {
    let t     = e && e.target || this,
			  state = {},
			  obj   = state,
        v     = typeof eventPath === 'string' ? 
                  delve(e, eventPath) 
                  : 
                  t.nodeName ? 
                    (t.type.match(/^che|rad/) ? t.checked : t.value) 
                    : 
                    e,
			  i     = 0;
		for ( ; i<path.length-1; i++) {
			obj = obj[path[i]] || (obj[path[i]] = !i && component.state[path[i]] || {});
		}
		obj[path[i]] = v;
		component.setState(state);
  })
}