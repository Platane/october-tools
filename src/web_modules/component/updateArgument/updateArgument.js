import React, {PropTypes}   from 'react'
import ObjectTree           from 'component/objectTree/main'


const UpdateArgument = ({ dependencies, result, action }) => {

    return result && (
        <div className="updateArgument" >

            <div className="updateArgument-right" >
                <div className="updateArgument-args" >

                    { action &&
                        <div className="updateArgument-arg" >
                            <ObjectTree object={{
                                    ['action'] : action
                                }} />
                        </div>
                    }

                    {
                        dependencies.map( ({ id, before, after }) =>
                            <div className="updateArgument-arg" key={id} >
                                <ObjectTree object={{
                                        [id] : {
                                            before,
                                            after :
                                                before == after
                                                    ? 'no change'
                                                    : after
                                        }
                                    }} />
                            </div>
                        )
                    }

                    <div className="updateArgument-arg" >
                        <ObjectTree object={{
                                previousValue : result.before
                            }} />
                    </div>

                </div>

                <div className="updateArgument-parentesis" />


            </div>
            
            <div className="updateArgument-arrow" >=></div>

            <div className="updateArgument-left" >
                {
                    result.before == result.after
                        ? 'no change'
                        : <ObjectTree object={{
                            result : result.after
                        }} />
                }
            </div>

        </div>
    )
}


export default UpdateArgument
