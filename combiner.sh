echo "var _ = require('./underscore/underscore.js');"

for f in `cat .combiner`
do
  cat $f
  echo
done
