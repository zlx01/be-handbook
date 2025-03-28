# OpenJDK 和 Oracle JDK的区别 - by doubao

1. **许可证**：OpenJDK 遵循 GPL（通用公共许可证），是开源且免费的，用户可自由使用、修改和分发。Oracle JDK 自 Java 11 开始采用 Oracle Binary Code License，在生产环境使用，特别是长期支持（LTS）版本，通常需付费订阅以获取安全更新和补丁。
2. **支持与更新**：OpenJDK 由社区支持，更新较快，新功能、改进和修复推出频繁，但社区对每个版本的支持时间通常较短。Oracle JDK 提供长期支持（LTS）版本，一般每三年发布一个 LTS 版本，提供长达八年的商业支持，有 24/7 的技术支持服务，定期发布安全更新和性能补丁。
3. **费用**：OpenJDK 完全免费，适用于各种场景，包括开发、测试和生产环境。Oracle JDK 免费用于开发和测试，但在生产环境中使用，若需要 Oracle 的商业支持服务，则需付费。
4. **性能优化**：OpenJDK 的性能优化主要由社区和贡献者提供。Oracle JDK 有一些专有的优化措施，由 Oracle 公司负责性能提升和修复，在响应性和 JVM 性能方面表现更好，更注重稳定性，适合企业级应用。
5. **闭源组件**：OpenJDK 无闭源组件，完全开源。Oracle JDK 包含一些闭源的工具和功能，如 Java Flight Recorder (JFR) 和 Mission Control 等，这些工具在商业环境中可提供高级的调试和性能分析功能。
6. **安全性**：两者安全性基本相同，都由社区处理安全性更新。不过，Oracle JDK 包含额外的安全修复和更新，在安全性方面可能更有保障。
7. **工具**：OpenJDK 包含基本的开发工具，如`javac`、`java`等。Oracle JDK 提供更多商业工具支持，如 JRockit 等，能更好地满足企业级开发和管理需求。
8. **发行周期**：OpenJDK 每 6 个月发布一次版本。Oracle JDK 也是每 6 个月发布一次版本，但 LTS 版本有 8 年的长期支持，版本更新相对保守，与 Oracle 的产品路线图一致。
9. **安装包大小**：OpenJDK 只包含 Java SE 的核心功能，安装包相对较小。Oracle JDK 因包含额外的商业功能和工具，安装包相对较大。
10. **兼容性**：OpenJDK 与 Oracle JDK 保持高度兼容，都严格遵循 Java 规范。Oracle JDK 在兼容性方面表现优异，与早期版本的 Java 应用程序和库通常高度兼容，经过广泛测试，在各种环境中的稳定性较好。


* https://github.com/openjdk/jdk
* https://openjdk.org/
* https://www.oracle.com/java/


