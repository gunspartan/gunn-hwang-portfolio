import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { FaGithub, FaLink } from 'react-icons/fa';
import {
  ProjectItem,
  ProjectInfo,
  TechStack,
  StyledStackLink,
  ProjectImage,
  StyledDescription,
  StyledLinkIcons,
} from './styles/ProjectShowcase.styled';
import SectionHeader from './SectionHeader';

const ProjectShowcase = () => {
  const renderDivder = () => {
    return <SectionHeader />;
  };

  const renderProjects = (item, index) => {
    return (
      <ProjectItem id={index}>
        <ProjectInfo>
          <h1>{item.node.title}</h1>
          <TechStack>
            {item.node.stack.map((technology, index) => {
              return (
                <StyledStackLink key={index}>
                  <Link to={technology.url}>
                    <img
                      src={technology.icon}
                      alt={`${technology.name}`}
                      style={{ width: '1em', height: '1em' }}
                    />
                    {technology.name}
                  </Link>
                </StyledStackLink>
              );
            })}
          </TechStack>
          <StyledDescription>{item.node.description}</StyledDescription>
          <StyledLinkIcons>
            {item.node.links.map((link) => (
              <Link to={link.url}>{renderIcon(link.type)}</Link>
            ))}
          </StyledLinkIcons>
        </ProjectInfo>
        <ProjectImage id={item.node.id} src={item.node.image} alt={`${item.node.title}`} />
      </ProjectItem>
    );
  };

  const renderIcon = (linkType) => {
    switch (linkType) {
      case 'github':
        return <FaGithub />;
      case 'website':
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
        <>
          {data.allProjectListJson.edges.map((item, index) => {
            if (data.allProjectListJson.edges[index + 1]) {
              return (
                <>
                  {renderProjects(item, index)}
                  {renderDivder()}
                </>
              );
            } else {
              return renderProjects(item, index);
            }
          })}
        </>
      )}
    />
  );
};

export default ProjectShowcase;
