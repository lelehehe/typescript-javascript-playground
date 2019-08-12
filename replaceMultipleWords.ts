let source = [
  'this is a test, with first and second inside, secondary is shown twice'];
let terms = ['first second', 'First SECOND'];
let patternStart = '<strong>'
let patternEnd = '</strong>';
let target = [
  'this is a test, with <strong>first</strong> and <strong>second</strong> inside, <strong>second</strong>ary is shown twice'];

let source1 = "abingop";

function highlightSearchTerms(
  source: string,
  terms: string,
  patternStart: string, 
  patternEnd: string
): string {
  const words = terms.split(/[ ,]+/);
  let giReplaceTerms = words.join('|');
  giReplaceTerms;
  
  const sourceWords = source.split(' ');
  sourceWords;
  return sourceWords.reduce((result, word) => {
    var re = new RegExp(giReplaceTerms, 'gi');
    word;
    let newWord = word.replace(re, function(x) {
      x;
      return patternStart + x + patternEnd;
    });
    newWord;

    return result + ' ' + newWord;
  }, '');
}

// var result = highlightSearchTerms(source, terms, pattern);
// var result0 = highlightSearchTerms(source[0], terms[0], patternStart, patternEnd);
var result1 = highlightSearchTerms(source[0], terms[1], patternStart, patternEnd);

// result0; 
result1;
target;

// console.log(result === target);
