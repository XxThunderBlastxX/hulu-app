import Thumbnail from './Thumbnail'

function Results({results}) {
    return (
        <div>
            {/*{results.map(result =>(*/}
            {/*    <Thumbnail key={result.key} result={result}/>*/}
            {/*))}*/}

            <Thumbnail/>

            {/*{results.map((result)=>(*/}
            {/*    <Thumbnail key={result.key} result={result}/>*/}
            {/*))}*/}
        </div>
    );
}

// <Thumbnail key={results.id} result={result}/>

export default Results;