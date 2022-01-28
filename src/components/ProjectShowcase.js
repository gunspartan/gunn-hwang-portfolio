import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectShowcase = () => {
  const renderIcon = (linkType) => {
    switch (linkType) {
      case "github":
        return <FaGithub />;
      case "website":
        return <FaLink />;
      default:
        break;
    }
  };

  return (
    <StaticQuery
      query={graphql`
        {
          allProjectListJson {
            edges {
              node {
                id
                image
                links {
                  type
                  url
                }
                title
                stack {
                  icon
                  name
                  url
                }
                description
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          {data.allProjectListJson.edges.map((item, index) => {
            console.log(item.node.stack);
            return (
              <div id={index}>
                <div>
                  <h1>{item.node.title}</h1>
                  <div>
                    {item.node.stack.map((technology, index) => {
                      return (
                        <div key={index}>
                          <img src={technology.icon} alt={`${technology.name}-icon`} />
                          <Link to={technology.url}>{technology.name}</Link>
                        </div>
                      );
                    })}
                  </div>
                  <p>{item.node.description}</p>
                </div>
                <img src={item.node.image} alt={`image-${item.node.title}`} style={{ height: "600px" }} />
                <div>
                  {item.node.links.map((link, index) => (
                    <Link to={link.url}>{renderIcon(link.type)}</Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    />
  );
};

export default ProjectShowcase;
