// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import user from "./user";
import character from "./character";
import savingThrows from "./savingThrows";
import proficiency from "./proficiency";
import classType from "./classType";
import abilityScores from "./abilityScores";
import classes from "./classes";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		savingThrows,
		classType,
		user,
		proficiency,
		character,
		abilityScores,
		classes,
	]),
});
