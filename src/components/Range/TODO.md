# TODO

* drag range

* errant onClick events after dragging can cause problems.  e.g. when a minRange
is defined and you try and drag the maxValue down past the minValue, the click
is registered in the track below the minValue, causing it to jump to that
location