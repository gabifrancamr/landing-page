import { Substation } from "./substation";
import { Generator } from "./generator";
import { Projects } from "./projects";
import { Report } from "./report";
import { Solar } from "./solar";

export function Services() {
    return (
        <div id="services" className="mt-16 lg:mt-32">
            <h2 className="text-5xl yellow">Serviços</h2>
            <div>
                <Solar />
                <Generator />
                <Report />
                <Substation />
                <Projects />
            </div>
        </div>
    )
}