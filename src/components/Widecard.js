import React from 'react'
const Widecard = ({ title, where, from, to}) => (
    <div class="widecard">
        <a href="https://www.galvanize.com/web-development" target="_blank">
        <div class="compdet">
            <h3>{title}</h3>
            <h4 className="secondtext">{where}</h4>
            <h4 className="secondtext">{from} - {to}</h4>
        </div>
        </a>
    </div>
)

export default Widecard